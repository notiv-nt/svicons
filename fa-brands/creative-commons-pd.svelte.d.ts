/** @typedef {typeof __propDef.props}  CreativeCommonsPdProps */
/** @typedef {typeof __propDef.events}  CreativeCommonsPdEvents */
/** @typedef {typeof __propDef.slots}  CreativeCommonsPdSlots */
export default class CreativeCommonsPd extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type CreativeCommonsPdProps = typeof __propDef.props
export type CreativeCommonsPdEvents = typeof __propDef.events
export type CreativeCommonsPdSlots = typeof __propDef.slots
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
