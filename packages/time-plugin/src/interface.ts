import { DateTime } from '@eng-easepick/datetime';
import { IBaseConfig } from '@eng-easepick/base-plugin';

export interface ITimeConfig extends IBaseConfig {
  native?: boolean;
  seconds?: boolean;
  stepHours?: number;
  stepMinutes?: number;
  stepSeconds?: number;
  format12?: boolean;
}

declare module '@eng-easepick/core' {
  interface Core {
    getDate(): DateTime;
    getStartDate(): DateTime;
    getEndDate(): DateTime;
    setTime(value: string): void;
    setStartTime(value: string): void;
    setEndTime(value: string): void;
  }
}

declare module '@eng-easepick/core/dist/types' {
  interface IPickerConfig {
    TimePlugin?: ITimeConfig;
  }
}