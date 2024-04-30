const header = document.createElement("header");
header.innerHTML = `
    <h1>Impresoras 3D</h1>
    <nav>
        <ul>
            <li><a href="#destacadas">Impresoras destacadas</a></li>
            <li><a href="#marcas">Marcas</a></li>
            <li><a href="#ofertas">Ofertas</a></li>
            <li><a href="#contacto">Contacto</a></li>
            </ul>
            </nav>`;
document.body.appendChild(header);

const sectionDestacadas = document.createElement("section");
sectionDestacadas.id = "destacadas";
sectionDestacadas.innerHTML = "<h2>Impresoras 3D destacadas</h2><div class='productos'></div>";
document.body.appendChild(sectionDestacadas);

const sectionMarcas = document.createElement("section");
sectionMarcas.id = "marcas";
sectionMarcas.innerHTML = "<h2>Marcas de impresoras 3D</h2><div class='marcas'></div>";
document.body.appendChild(sectionMarcas);

const sectionOfertas = document.createElement("section");
sectionOfertas.id = "ofertas";
sectionOfertas.innerHTML = "<h2>Ofertas en impresoras 3D</h2><div class='ofertas'></div>";
document.body.appendChild(sectionOfertas);

const sectionContacto = document.createElement("section");
sectionContacto.id = "contacto";
sectionContacto.innerHTML = "<h2>Contacto</h2><form id='formulario-contacto'></form>";
document.body.appendChild(sectionContacto);

const footer = document.createElement("footer");
footer.innerHTML = "<p>&copy; 2024 Impresoras3D.com</p>";
document.body.appendChild(footer);






