import { GameMode, GameStatus } from '../types';

const GAME_OVER_STATES = [GameStatus.LOST, GameStatus.WON];

export const isGameOver = (gameStatus: GameStatus): boolean =>
  GAME_OVER_STATES.some((status) => status === gameStatus);

export const isHardMode = (mode: GameMode): boolean => GameMode.HARD === mode;
