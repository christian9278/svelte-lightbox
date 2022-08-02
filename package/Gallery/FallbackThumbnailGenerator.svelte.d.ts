import { SvelteComponentTyped } from "svelte";
import type { GalleryImage } from './Types';
declare const __propDef: {
    props: {
        images: Array<GalleryImage>;
        activeImage: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type FallbackThumbnailGeneratorProps = typeof __propDef.props;
export declare type FallbackThumbnailGeneratorEvents = typeof __propDef.events;
export declare type FallbackThumbnailGeneratorSlots = typeof __propDef.slots;
export default class FallbackThumbnailGenerator extends SvelteComponentTyped<FallbackThumbnailGeneratorProps, FallbackThumbnailGeneratorEvents, FallbackThumbnailGeneratorSlots> {
}
export {};
