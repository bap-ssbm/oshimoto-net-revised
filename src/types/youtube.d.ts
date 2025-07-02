// src/types/youtube.d.ts
declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
  }

  namespace YT {
    class Player {
      constructor(elementId: string, options: PlayerOptions);
      playVideo(): void;
    }

    interface PlayerOptions {
      videoId: string;
      playerVars?: {
        autoplay?: number;
        controls?: number;
        mute?: number;
        modestbranding?: number;
        rel?: number;
        showinfo?: number;
        loop?: number;
        playlist?: string;
      };
      events?: {
        onReady?: (event: PlayerEvent) => void;
        onStateChange?: (event: PlayerStateChangeEvent) => void;
      };
    }

    interface PlayerEvent {
      target: Player;
    }

    interface PlayerStateChangeEvent extends PlayerEvent {
      data: PlayerState;
    }

    interface PlayerState {
      ENDED: number;
      PLAYING: number;
      PAUSED: number;
      BUFFERING: number;
      CUED: number;
    }

    const PlayerState: PlayerState;
  }
}

export {};
