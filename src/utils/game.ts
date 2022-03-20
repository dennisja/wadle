import { GameMode, GameStatus } from '../types';

const GAME_OVER_STATES = [GameStatus.LOST, GameStatus.WON];

const isGameOver = (gameStatus: GameStatus): boolean =>
  GAME_OVER_STATES.some((status) => status === gameStatus);

const isHardMode = (mode: GameMode): boolean => GameMode.HARD === mode;

export { isGameOver, isHardMode };
