import '../css/artcatalog.scss';
import { IOptions } from './artcatalog.i';

export default class Artcatalog {
    private options: object;
    private el: string;
    private target: string;

    constructor(options: IOptions) {
        this.options = options;
        this.el = options.el;
        this.target = options.target;
    }

    private template(nodes: Element[]) {
        let fragment = document.createDocumentFragment();
        nodes.forEach((item: any) => {
            let a = document.createElement('a');
            a.href = '#' + item.id;
            a.innerText = item.innerText;
            let li = document.createElement('li');
            li.style.marginLeft = (item.nodeName[1] - 1) * 15 + 'px';
            li.appendChild(a);
            fragment.appendChild(li);
        })
        let ul = document.createElement('ul');
        ul.classList.add('artcatalog');
        ul.appendChild(fragment);
        return ul;
    }

    private generate(ele: Element) {
        const arr: string[] = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];
        let menuArr: any[] = [];
        const nodes = ele.childNodes;
        nodes.forEach((item: any) => {
            if (arr.indexOf(item.nodeName.toUpperCase()) !== -1) {
                if (item.id === '-' || item.id === '') {
                    item.id += item.innerHTML;
                }
                menuArr.push(item);
            }
        });
        return menuArr;
    }

    public render() {
        // TODO: 空元素判断
        const el = document.querySelector(this.el);
        const node = this.template(this.generate(el));
        // if have target option, inside target element, else fixed position.
        if (this.target) {
            document.querySelector(this.target).appendChild(node);
        } else {
            let el = document.createElement('div');
            el.classList.add('artcatalog-localation');
            el.appendChild(node);
            document.body.appendChild(el);
        }
    }
}