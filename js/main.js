
const canvas = document.getElementById('renderCanvas');

const engine = new BABYLON.Engine(canvas, true);

const createScene = () => {
    //Создает базовый объект сцены Вавилона
    const scene = new BABYLON.Scene(engine);

    //Создает и позиционирует свободную камеру
    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 5, new BABYLON.Vector3(0, 0, 0), scene);
    //Добавим движение камере
    camera.useAutoRotationBehavior = true;
    //Прикрепляем каменру к холсту
    camera.attachControl(canvas, true);

    // Создает свет, направленный 0,1,0 - в небо
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 0, 0));

    BABYLON.STLFileLoader.DO_NOT_ALTER_FILE_COORDINATES = true;

    

    //Создаём поверхность
    //const ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 10, height: 10}, scene);
    return scene;
}
//Вызов функции createScene
const scene = createScene(); 

BABYLON.SceneLoader.Append("./resources/", "reductor.stl", scene, function (scene) {
    // do something with the scene
});

engine.runRenderLoop(function () {
    scene.render();
});
window.addEventListener("resize", function () {
    engine.resize();
});
