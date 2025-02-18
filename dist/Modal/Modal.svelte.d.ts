import { SvelteComponentTyped } from "svelte";
import type { ImagePreset } from '../Types';
declare const __propDef: {
    props: {
        [x: string]: any;
        transitionDuration: number;
        imagePreset: ImagePreset;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ModalProps = typeof __propDef.props;
export type ModalEvents = typeof __propDef.events;
export type ModalSlots = typeof __propDef.slots;
export default class Modal extends SvelteComponentTyped<ModalProps, ModalEvents, ModalSlots> {
}
export {};
