import { IBaseConfig } from '@eng-easepick/base-plugin';

export interface IKbdPlugin extends IBaseConfig {
  unitIndex?: number;
  dayIndex?: number;
  html?: string;
}

declare module '@eng-easepick/core/dist/types' {
  interface IKbdPlugin {
    KbdPlugin?: IKbdPlugin;
  }
}
