let registros = [];
let numeroFamilias = 0;

// ======================================
// AGREGAR FAMILIA
// ======================================

function agregarFamilia() {

    numeroFamilias++;

    const contenedor =
        document.getElementById("contenedorFamilias");

    const card = document.createElement("div");

    card.className = "card-familia";

    card.innerHTML = `

        <h3>Familia ${numeroFamilias}</h3>

        <select class="familia">

    <option value="">Familia</option>

    <option>Familia 1</option>

    <option>Familia 2</option>

    <option>Familia 3</option>

    <option>Familia 4</option>

    <option>Familia 5</option>

</select>


        <select class="tipo">
            <option value="">Tipo</option>
            <option>Diaclasa</option>
            <option>Venillas</option>
            <option>Estratificación</option>
            <option>Foliación</option>
        </select>

        <input
            type="number"
            class="dip"
            placeholder="Dip">

        <input
            type="number"
            class="dipdirection"
            placeholder="DipDirection">

        <select class="apertura">
            <option value="">Apertura</option>
            <option>Cerrada</option>
            <option>Muy Angosta &lt;0.1mm</option>
            <option>Angosta 0.1 - 1.0 mm</option>
            <option>Abierta 1.0 - 5.0 mm</option>
            <option>Muy Abierta &gt;5mm</option>
        </select>

        <select class="rugosidad">
            <option value="">Rugosidad</option>
            <option>Muy Rugosa</option>
            <option>Rugosa</option>
            <option>Ligeramente Rugosa</option>
            <option>Lisa</option>
            <option>Espejo de Falla</option>
        </select>

        <select class="relleno">
            <option value="">Relleno</option>
            <option>Sin Relleno</option>
            <option>Duro &lt;5mm</option>
            <option>Duro &gt;5mm</option>
            <option>Suave &lt;5mm</option>
            <option>Suave &gt;5mm</option>
        </select>

        <select class="alteracion">
            <option value="">Alteración</option>
            <option>Sana</option>
            <option>Ligeramente Alterada</option>
            <option>Moderadamente Alterada</option>
            <option>Muy Alterada</option>
            <option>Descompuesta</option>
        </select>

        <select class="jr">

            <option value="">Jr</option>

            <option>Juntas Discontinuas</option>

            <option>Rugosas o irregular ondulada</option>

            <option>Suave Ondulada</option>

            <option>Espejo de falla, ondulada</option>

            <option>Rugosa o irregular plana</option>

            <option>Suave Plana</option>

            <option>Espejo de falla, plano</option>

            <option>No existe contacto entre las caras</option>

    </select>

        <select class="ja">

    <option value="">Ja</option>

    <option>Discont cerrada, dura e impermeable</option>

    <option>Discont inalterada, con manchas</option>

    <option>Discont ligeramente alterados, particulas arenosas</option>

    <option>Arcillas limosas, pequeñas arcillas no blandas</option>

    <option>Recubrimiento de arcillas blandas o baja friccion</option>

    <option>No hay contacto entre los planos de discontinuidad</option>

</select>

        <h4>Espaciamientos (m)</h4>

        <div class="grid-esp">

            <input class="esp1" placeholder="Esp1">
            <input class="esp2" placeholder="Esp2">
            <input class="esp3" placeholder="Esp3">
            <input class="esp4" placeholder="Esp4">
            <input class="esp5" placeholder="Esp5">
            <input class="esp6" placeholder="Esp6">
            <input class="esp7" placeholder="Esp7">
            <input class="esp8" placeholder="Esp8">
            <input class="esp9" placeholder="Esp9">
            <input class="esp10" placeholder="Esp10">
            <input class="esp11" placeholder="Esp11">

        </div>

    <h4>Persistencias (m)</h4>

    <div class="grid-pers">

            <input class="pers1" placeholder="Long1">
            <input class="pers2" placeholder="Long2">
            <input class="pers3" placeholder="Long3">
            <input class="pers4" placeholder="Long4">
            <input class="pers5" placeholder="Long5">
            <input class="pers6" placeholder="Long6">
            <input class="pers7" placeholder="Long7">
            <input class="pers8" placeholder="Long8">
            <input class="pers9" placeholder="Long9">
            <input class="pers10" placeholder="Long10">

        </div>

    `;

    contenedor.appendChild(card);

}
    

// ======================================
// AGREGAR MAPEO
// ======================================

function agregarRegistro() {

    let registroGeneral = {

        uMinera:
            document.getElementById("u_minera")?.value || "ANDAYCHAGUA",

        fecha:
            document.getElementById("fecha")?.value || "",

        nCelda:
            document.getElementById("n_celda")?.value || "",

        labor:
            document.getElementById("labor")?.value || "",

        nivel:
            document.getElementById("nivel")?.value || "",

        cuerpoVeta:
            document.getElementById("cuerpo_veta")?.value || "",

        geomecanico:
            document.getElementById("geomecanico")?.value || "",

        empresa:
            document.getElementById("empresa")?.value || "",

        turno:
            document.getElementById("turno")?.value || "",

        referencia:
            document.getElementById("referencia")?.value || "",

        litologia:
            document.getElementById("litologia")?.value || "",

        azimut:
            document.getElementById("azimut_labor")?.value || "",

        tipoAlteracion:
            document.getElementById("tipo_alteracion")?.value || "",

        longitudMapeo:
            document.getElementById("longitud_mapeo")?.value || "",

        ubicacionMapeo:
            document.getElementById("ubicacion_mapeo")?.value || "",

        este:
            document.getElementById("este")?.value || "",

        norte:
            document.getElementById("norte")?.value || "",

        cota:
            document.getElementById("cota")?.value || "",

        ancho:
            document.getElementById("ancho")?.value || "",

        alto:
            document.getElementById("alto")?.value || "",

        durezaEstimada:
            document.getElementById("dureza_estimada")?.value || "",

        jn:
            document.getElementById("jn")?.value || "",

        alteracionMatriz:
            document.getElementById("alteracion_matriz")?.value || "",

        agua:
            document.getElementById("agua")?.value || "",

        ph:
            document.getElementById("ph")?.value || "",

        temperatura:
            document.getElementById("temperatura")?.value || "",

        dipFilitas:
            document.getElementById("dip_filitas")?.value || "",

        dipDirFilitas:
            document.getElementById("dipdir_filitas")?.value || "",

        espFilitas:
            document.getElementById("esp_filitas")?.value || "",

        durezaFilitas:
            document.getElementById("dureza_filitas")?.value || "",

        gsiMin:
            document.getElementById("gsi_min")?.value || "",

        gsiMax:
            document.getElementById("gsi_max")?.value || "",

        zona:
            document.getElementById("zona")?.value || "",

        condicionMapeo:
            document.getElementById("condicion_mapeo")?.value || "",

        observaciones:
            document.getElementById("observaciones")?.value || ""

    };

    const familias =
        document.querySelectorAll(".card-familia");

    // SI NO EXISTEN FAMILIAS
    if (familias.length === 0) {

        registros.push(registroGeneral);

    }

    // SI EXISTEN FAMILIAS
    else {

        familias.forEach(fam => {

            let fila = {

                ...registroGeneral,

                familia:
                    fam.querySelector(".familia")?.value || "",

                tipo:
                    fam.querySelector(".tipo")?.value || "",

                dip:
                    fam.querySelector(".dip")?.value || "",

                dipDirection:
                    fam.querySelector(".dipdirection")?.value || "",

                apertura:
                    fam.querySelector(".apertura")?.value || "",

                rugosidad:
                    fam.querySelector(".rugosidad")?.value || "",

                relleno:
                    fam.querySelector(".relleno")?.value || "",

                alteracion:
                    fam.querySelector(".alteracion")?.value || "",

                jr:
                    fam.querySelector(".jr")?.value || "",

                ja:
                    fam.querySelector(".ja")?.value || ""

            };

            registros.push(fila);

        });

    }

    document.getElementById("contador").innerHTML =
        registros.length + " registros";

    console.log(registros);

    alert("Mapeo agregado correctamente");
}

// ======================================
// EXPORTAR EXCEL
// ======================================

function exportarExcel() {

    if (registros.length === 0) {

        alert("No hay registros");

        return;
    }

    const encabezados = [

        "U. Minera",
        "Fecha",
        "N_Celda",
        "Labor",
        "Nivel",
        "Cuerpo / Veta",
        "Geomecanico",
        "Empresa",
        "Turno",
        "Referencia",
        "Litologia",
        "Azimut de Labor",
        "Tipo_Alteracion",
        "Longitud de mapeo(m)",
        "Ubicacion de Mapeo",
        "Este(m)",
        "Norte(m)",
        "Cota(m)",
        "Ancho(m)",
        "Alto(m)",
        "Dureza Estimada",
        "Diaclasamiento (Jn)",
        "Alteración de Matriz Rocosa",
        "Agua",
        "pH",
        "Temperatura (grados C)",
        "Dip Filitas",
        "DipDir Filitas",
        "Espaciamiento de foliacion en filitas (cm)",
        "Dureza de Filitas",
        "GSI_Mínimo",
        "GSI_Máximo",

        "G1(m)",
        "G2(m)",
        "G3(m)",
        "G4(m)",
        "G5(m)",
        "G6(m)",
        "G7(m)",
        "G8(m)",
        "G9(m)",
        "G10(m)",
        "G11(m)",
        "G12(m)",
        "G13(m)",
        "G14(m)",
        "G15(m)",

        "Familias",
        "Tipo",
        "Dip",
        "DipDirection",
        "Apertura",
        "Rugosidad",
        "Relleno",
        "Alteración",
        "Jr",
        "Ja",

        "Esp1(m)",
        "Esp2(m)",
        "Esp3(m)",
        "Esp4(m)",
        "Esp5(m)",
        "Esp6(m)",
        "Esp7(m)",
        "Esp8(m)",
        "Esp9(m)",
        "Esp10(m)",
        "Esp11(m)",

        "Pers.Long1(m)",
        "Pers.Long2(m)",
        "Pers.Long3(m)",
        "Pers.Long4(m)",
        "Pers.Long5(m)",
        "Pers.Long6(m)",
        "Pers.Long7(m)",
        "Pers.Long8(m)",
        "Pers.Long9(m)",
        "Pers.Long10(m)",

        "Zona",
        "Condicion de Mapeo",
        "Observaciones"
    ];

    let datos = [];

    datos.push(encabezados);

    registros.forEach(r => {

        datos.push([

            r.uMinera || "",
            r.fecha || "",
            r.nCelda || "",
            r.labor || "",
            r.nivel || "",
            r.cuerpoVeta || "",
            r.geomecanico || "",
            r.empresa || "",
            r.turno || "",
            r.referencia || "",
            r.litologia || "",
            r.azimut || "",
            r.tipoAlteracion || "",
            r.longitudMapeo || "",
            r.ubicacionMapeo || "",
            r.este || "",
            r.norte || "",
            r.cota || "",
            r.ancho || "",
            r.alto || "",
            r.durezaEstimada || "",
            r.jn || "",
            r.alteracionMatriz || "",
            r.agua || "",
            r.ph || "",
            r.temperatura || "",
            r.dipFilitas || "",
            r.dipDirFilitas || "",
            r.espFilitas || "",
            r.durezaFilitas || "",
            r.gsiMin || "",
            r.gsiMax || "",

            r.g1 || "",
            r.g2 || "",
            r.g3 || "",
            r.g4 || "",
            r.g5 || "",
            r.g6 || "",
            r.g7 || "",
            r.g8 || "",
            r.g9 || "",
            r.g10 || "",
            r.g11 || "",
            r.g12 || "",
            r.g13 || "",
            r.g14 || "",
            r.g15 || "",

            r.familia || "",
            r.tipo || "",
            r.dip || "",
            r.dipDirection || "",
            r.apertura || "",
            r.rugosidad || "",
            r.relleno || "",
            r.alteracionDisc || "",
            r.jr || "",
            r.ja || "",

            r.esp1 || "",
            r.esp2 || "",
            r.esp3 || "",
            r.esp4 || "",
            r.esp5 || "",
            r.esp6 || "",
            r.esp7 || "",
            r.esp8 || "",
            r.esp9 || "",
            r.esp10 || "",
            r.esp11 || "",

            r.pers1 || "",
            r.pers2 || "",
            r.pers3 || "",
            r.pers4 || "",
            r.pers5 || "",
            r.pers6 || "",
            r.pers7 || "",
            r.pers8 || "",
            r.pers9 || "",
            r.pers10 || "",

            r.zona || "",
            r.condicionMapeo || "",
            r.observaciones || ""

        ]);

    });

    const wb = XLSX.utils.book_new();

    const ws = XLSX.utils.aoa_to_sheet(datos);

    XLSX.utils.book_append_sheet(
        wb,
        ws,
        "Mapeos"
    );

    XLSX.writeFile(
        wb,
        "MAPEOS_DIARIOS.xlsx"
    );
}

function mostrarTab(id){

    document
        .querySelectorAll(".tab-content")
        .forEach(tab => {

            tab.classList.remove("active");

        });

    document
        .querySelectorAll(".tabs button")
        .forEach(btn => {

            btn.classList.remove("activo");

        });

    document
        .getElementById(id)
        .classList.add("active");

}

window.onload = function(){

    mostrarTab(
        "general",
        document.querySelector(".tabs button")
    );

};
function mostrarTab(id, boton){

    document
        .querySelectorAll(".tab-content")
        .forEach(tab => {

            tab.classList.remove("active");

        });

    document
        .querySelectorAll(".tabs button")
        .forEach(btn => {

            btn.classList.remove("activo");

        });

    document
        .getElementById(id)
        .classList.add("active");

    if(boton){

        boton.classList.add("activo");

    }

}
function limpiarFormulario(){

    if(!confirm("¿Limpiar todos los datos del formulario?")){
        return;
    }

    document
        .querySelectorAll("input")
        .forEach(input => {

            if(
                input.id !== "u_minera"
            ){
                input.value = "";
            }

        });

    document
        .querySelectorAll("select")
        .forEach(select => {

            select.selectedIndex = 0;

        });

    document
        .querySelectorAll("textarea")
        .forEach(textarea => {

            textarea.value = "";

        });

    document.getElementById(
        "contenedorFamilias"
    ).innerHTML = "";

    numeroFamilias = 0;

}
function eliminarUltimoRegistro(){

    if(registros.length === 0){

        alert("No existen registros para eliminar");

        return;
    }

    registros.pop();

    document.getElementById("contador").innerHTML =
        registros.length + " registros";

    alert("Último registro eliminado");

}
