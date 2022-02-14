class Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        this._nombre = nombre;
        this._edad = edad;
        this._img = img;
        this._comentarios = comentarios;
        this._sonido = sonido;
    }
    set nombre(value) {
        this._nombre = value;
    }
    get nombre() {
        return this._nombre;
    }

    set edad(value) {
        this._edad = value;
    }
    get edad() {
        return this._edad;
    }

    set img(value) {
        this._img = value;
    }
    get img() {
        return this._img;
    }
    set comentarios(value) {
        this._comentarios = value;
    }
    get comentarios() {
        return this._comentarios;
    }
    set sonido(value) {
        this._sonido = value;
    }
    get sonido() {
        return this._sonido;
    }
}


class Leon extends Animal {
    /*     constructor(nombre, edad, img, comentarios, sonido) {
            super(nombre, edad, img, comentarios, sonido);
        } */
    rugir() {}
}

class Lobo extends Animal {
    /*     constructor(nombre, edad, img, comentarios, sonido) {
            super(nombre, edad, img, comentarios, sonido);
        } */
    aullar() {}
}

class Oso extends Animal {
    /*     constructor(nombre, edad, img, comentarios, sonido) {
            super(nombre, edad, img, comentarios, sonido);
        } */
    gruñir() {}
}

class Serpiente extends Animal {
    /*     constructor(nombre, edad, img, comentarios, sonido) {
            super(nombre, edad, img, comentarios, sonido);
        } */
    sisear() {}
}

class Aguila extends Animal {
    /*     constructor(nombre, edad, img, comentarios, sonido) {
            super(nombre, edad, img, comentarios, sonido);
        } */
    chillar() {}
}


export { Leon, Lobo, Oso, Serpiente, Aguila }