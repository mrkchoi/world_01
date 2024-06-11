import * as THREE from 'three';

export const ACTIONS = {
  IDLE: 'Character - Idle',
  WALK: 'Walk',
  RUN: 'Run',
  JUMP: 'Jumping',
  FLIP: 'Flip',
  UPROCK: 'Uprock',
};
const KEYS = {
  KeyW: 'KeyW',
  KeyA: 'KeyA',
  KeyS: 'KeyS',
  KeyD: 'KeyD',
  ShiftLeft: 'ShiftLeft',
  ShiftRight: 'ShiftRight',
  Space: 'Space',
};
const DIRECTIONS = [KEYS.KeyW, KEYS.KeyA, KEYS.KeyS, KEYS.KeyD];

export class CharacterControls {
  model;
  mixer;
  animationsMapIdle;
  orbitControl;
  camera;

  // state
  toggleRun = true;
  currentAction;

  // temporary data
  walkDirection = new THREE.Vector3();
  rotateAngle = new THREE.Vector3(0, 1, 0);
  rotateQuarternion = new THREE.Quaternion();
  cameraTarget = new THREE.Vector3();

  // constants
  fadeDuration = 0.2;
  runVelocity = 10;
  walkVelocity = 4;

  constructor(
    model,
    player,
    mixer,
    animationsMap,
    orbitControl,
    camera,
    currentAction
  ) {
    this.model = model;
    this.player = player;
    this.mixer = mixer;
    this.animationsMap = animationsMap;
    this.currentAction = currentAction;
    this.animationsMap.forEach((value, key) => {
      if (key === currentAction) {
        value.play();
      }
    });
    this.orbitControl = orbitControl;
    this.camera = camera;
    this.updateCameraTarget(0, 0);
  }

  switchRunToggle() {
    this.toggleRun = !this.toggleRun;
  }

  update(delta, keysPressed, playerIsOnGround) {
    const directionPressed = DIRECTIONS.some(
      (key) => keysPressed[key] === true
    );

    const runEnabled = keysPressed[KEYS.ShiftLeft || KEYS.ShiftRight];
    const playerIsJumping = !playerIsOnGround && keysPressed[KEYS.Space];

    var play = '';
    if (playerIsJumping) {
      play = ACTIONS.JUMP;
    } else if (directionPressed && runEnabled) {
      play = ACTIONS.RUN;
    } else if (directionPressed) {
      play = ACTIONS.WALK;
    } else {
      play = ACTIONS.IDLE;
    }

    if (this.currentAction !== play) {
      // console.log('this.animationsMap: ', this.animationsMap);
      const toPlay = this.animationsMap.get(play);
      const current = this.animationsMap.get(this.currentAction);

      current.fadeOut(this.fadeDuration);
      toPlay.reset().fadeIn(this.fadeDuration).play();

      this.currentAction = play;
    }

    this.mixer.update(delta);

    if (
      this.currentAction === ACTIONS.RUN ||
      this.currentAction === ACTIONS.WALK ||
      this.currentAction === ACTIONS.JUMP
    ) {
      // calculate towards camera direction
      var angleYCameraDirection = this.orbitControl.getAzimuthalAngle() || 0;
      // diagonal movement angle offset
      var directionOffset = this.directionOffset(keysPressed);

      // rotate model
      this.rotateQuarternion.setFromAxisAngle(
        this.rotateAngle,
        angleYCameraDirection + directionOffset
      );

      this.model.quaternion.slerp(this.rotateQuarternion, 0.2);
    }
  }

  updateCameraTarget(moveX, moveZ) {
    // move camera
    this.camera.position.x += moveX;
    this.camera.position.z += moveZ;

    // update camera target
    this.cameraTarget.x = this.model.position.x;
    this.cameraTarget.y = this.model.position.y + 1;
    this.cameraTarget.z = this.model.position.z;
    this.orbitControl.target = this.cameraTarget;
  }

  directionOffset(keysPressed) {
    var directionOffset = 0; // w

    if (keysPressed[KEYS.KeyW]) {
      if (keysPressed[KEYS.KeyA]) {
        directionOffset = Math.PI / 4; // w+a
      } else if (keysPressed[KEYS.KeyD]) {
        directionOffset = -Math.PI / 4; // w+d
      }
    } else if (keysPressed[KEYS.KeyS]) {
      if (keysPressed[KEYS.KeyA]) {
        directionOffset = Math.PI / 4 + Math.PI / 2; // s+a
      } else if (keysPressed[KEYS.KeyD]) {
        directionOffset = -Math.PI / 4 - Math.PI / 2; // s+d
      } else {
        directionOffset = Math.PI; // s
      }
    } else if (keysPressed[KEYS.KeyA]) {
      directionOffset = Math.PI / 2; // a
    } else if (keysPressed[KEYS.KeyD]) {
      directionOffset = -Math.PI / 2; // d
    }

    return directionOffset;
  }
}
