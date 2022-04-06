class Contato extends HTMLElement {
    constructor() {
        super()

        this.build()
    }

    build() {

        const shadow = this.attachShadow({mode: 'open'})

        const container = this.container()
        const linkedin = this.linkedin()
        const github = this.github()
        const whatsapp = this.whatsapp()
        const imageLinkedin =this.imageLinkedin()
        const imageGithub =this.imageGithub()
        const imageWhatsapp =this.imageWhatsapp()

        shadow.appendChild(this.styles())
        shadow.appendChild(container)
        container.appendChild(linkedin)
        container.appendChild(github)
        container.appendChild(whatsapp)
        linkedin.appendChild(imageLinkedin)
        github.appendChild(imageGithub)
        whatsapp.appendChild(imageWhatsapp)
    }

    styles() {
        
        const style = document.createElement('style')
        style.textContent = `
        #contato-res {
            width: 100%;
            display: flex;
            flex-flow: row wrap;
            justify-content: flex-end;
        }

        #link-res {
            margin-right: 34px;
            cursor: pointer;
        }

        #image-res {
            width: 24px;
            height: 24px;
        }
        `
        return style
    }

    container() {

        const container = document.createElement('div')
        container.setAttribute('id', 'contato-res')
        container.textContent = this.textContent

        return container
    }

    linkedin() {

        const link = document.createElement('a')
        link.setAttribute('id', 'link-res')
        link.textContent = this.textContent

        return link
    }

    github() {

        const link = document.createElement('a')
        link.setAttribute('id', 'link-res')
        link.textContent = this.textContent

        return link
    }

    whatsapp() {

        const link = document.createElement('a')
        link.setAttribute('id', 'link-res')
        link.textContent = this.textContent

        return link
    }

    imageLinkedin() {

        const image = document.createElement('img')
        image.setAttribute('id', 'image-res')
        image.src = 'image/linkedin.svg'
        image.onclick = function() {
            window.open('https://www.linkedin.com/in/jeff-grunvald-a18123235/', '_blank')
        }

        return image
    }

    imageGithub() {

        const image = document.createElement('img')
        image.setAttribute('id', 'image-res')
        image.src = 'image/github.svg'
        image.onclick = function() {
            window.open('https://github.com/JeffGrunvald', '_blank')
        }

        return image
    }

    imageWhatsapp() {

        const image = document.createElement('img')
        image.setAttribute('id', 'image-res')
        image.src = 'image/whatsapp.svg'
        image.onclick = function() {
            window.open('https://api.whatsapp.com/send?phone=+5549988740031', '_blank')
        }

        return image
    }
}

customElements.define('contato-res', Contato)