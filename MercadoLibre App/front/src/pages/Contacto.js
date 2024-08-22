import React from "react";



const Contacto = (props) => {
    return (
        <div class="container mt-5">
            <h1>Contacto</h1>
            <div class="container mt-5">
                <h3>Formulario de Contacto</h3>
                <form action="/enviar-formulario" method="post">
                    <div class="form-group">
                        <label for="name">Nombre</label>
                        <input type="text" class="form-control" id="name" name="name" placeholder="Introduce tu nombre" />
                    </div>

                    <div class="form-group">
                        <label for="email">Correo electrónico</label>
                        <input type="email" class="form-control" id="email" name="email" placeholder="Introduce tu correo electrónico" />
                    </div>

                    <div class="form-group">
                        <label for="phone">Teléfono</label>
                        <input type="tel" class="form-control" id="phone" name="phone" placeholder="Introduce tu número de teléfono" />
                    </div>

                    <div class="form-group">
                        <label for="message">Mensaje</label>
                        <textarea class="form-control" id="message" name="message" rows="4" placeholder="Introduce tu mensaje"></textarea>
                    </div>

                    <button type="submit" class="btn btn-primary">Enviar</button>
                </form>
            </div>

        </div>
    );
};

export default Contacto;