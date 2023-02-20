/** @typedef {typeof __propDef.props}  PaperClipProps */
/** @typedef {typeof __propDef.events}  PaperClipEvents */
/** @typedef {typeof __propDef.slots}  PaperClipSlots */
export default class PaperClip extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type PaperClipProps = typeof __propDef.props
export type PaperClipEvents = typeof __propDef.events
export type PaperClipSlots = typeof __propDef.slots
import { SvelteComponentTyped } from 'svelte'
declare const __propDef: {
  props: {
    [x: string]: any
  }
  events: {
    [evt: string]: CustomEvent<any>
  }
  slots: {}
}
export {}
