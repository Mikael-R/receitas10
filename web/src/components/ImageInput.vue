<template>
	<div class="image-input">
		{{
			imagesNames.length
				? `Imagens:
      ${imagesNames.join(', ')}`
				: 'Clique ou arraste uma imagem aqui'
		}}

		<input
			type="file"
			accept="image/*"
			multiple
			@change="onUploadFiles"
			tabindex="-1"
		/>
	</div>
</template>

<script>
export default {
	name: 'ImageInput',
	props: {
		onAddImages: {
			type: Function,
			required: false
		}
	},
	data() {
		return {
			imagesNames: [],
			files: []
		}
	},
	methods: {
		fileToBase64(file) {
			return new Promise(resolve => {
				const reader = new FileReader()

				reader.onload = function (event) {
					resolve(event.target.result)
				}

				reader.readAsDataURL(file)
			})
		},
		validateInputFile(file) {
			if (!/image\/*/.test(file.type)) {
				this.$bvToast.toast('O arquivo enviado não é uma imagem.', {
					title: 'Whoops! Extensão inválida.',
					variant: 'danger',
					solid: true
				})
				return false
			}
			return true
		},
		async onUploadFiles(event) {
			const { files } = event.target
			let imagesNames = []
			let imagesBase64 = []

			for (const file of files) {
				const isValid = this.validateInputFile(file)

				if (isValid) {
					const imageBase64 = await this.fileToBase64(file)
					imagesBase64.push(imageBase64)
					imagesNames.push(file.name)
				} else {
					imagesNames = []
					imagesBase64 = []
					event.target.value = ''
					break
				}
			}

			if (imagesBase64.length) {
				this.imagesNames = imagesNames
				this.$props.onAddImages(imagesBase64)
			}
		}
	}
}
</script>

<style scoped>
.image-input {
	width: 400px;
	height: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	background: #ccc;
	border: 3px dotted #bebebe;
	border-radius: 10px;
}

.image-input input[type='file'],
.image-input input[type='file']::-webkit-file-upload-button {
	width: 400px;
	height: 100px;
	position: absolute;
	cursor: pointer;
	opacity: 0;
}
</style>
