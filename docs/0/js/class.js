;(function(){
class Class {
    constructor() {
        this._name = '';
        this._extend = '';
        this._body = '';
        this._fields = {
            instance: new Map(),       // .name        f()
            private: new Map(),        // .#name       pf()
            protected: new Map(),      // ._name       _f / [p][g|s|d|gs]()
            static: new Map(),         // Cls.name     sf()
            staticPrivate: new Map(),  // Cls.#name    spf()
        }
        this._methods = {
            instance: new Map(),       // .name()      m()
            private: new Map(),        // .#name()     pm()
            protected: new Map(),      // ._name()     _m()
            static: new Map(),         // Cls.name()   sm()
            staticPrivate: new Map(),  // Cls.#name()  spm()
        }
        this._descriptors = {
            instance: new Map(),       // .name        [g|s|d|gs]()
            private: new Map(),        // .#name       p[g|s|d|gs]()
            protected: new Map(),      // ._name       _[p][g|s|d|gs]()
        }
        //this._fields = new Map()
        //this._privateFields = new Map()
        //this._protectedFields = new Map()
//        this._fields = []
//        this._privateFields = []
//        this._protectedFields = []
    }
    static of(name, extend) {
        if (!Type.isStr(name) && !Type.isCls(name)) {throw new TypeError(`name は 必須であり、文字列またはクラスのみ有効です。`)}
        if (!Type.isStr(extend) && !Type.isCls(extend) && false!==!!extend) {throw new TypeError(`extend は 文字列またはクラスのみ有効です。不要なときはFalsy値にしてください。（null,undefined,false,0,''等）`)}
        const N = Type.isCls(name) ? name.constructor.name : name
        const E = !!extend ? (Type.isCls(name) ? name.constructor.name : (Type.isStr(extend) ? extend : '')) : ''
        return new Class(N, 0 < E.length ? `extends ${E}` : E)
    }
    make() { return new Function(`return class ${this._name} ${this._extend} {${this._body}}`)() }
    f(name, value=null) {
        if (!Type.isStr(name)) {throw new TypeError(`name は 必須であり、文字列のみ有効です。`)}
        if (this._fields.has(name)) {throw new TypeError(`name=${name} は既存です。同名は一度のみ定義可能です。`)}
        this._fields.set(name, `this.${name} = ${value};`)
        return this
    }
}
window.Class = Class
})();
