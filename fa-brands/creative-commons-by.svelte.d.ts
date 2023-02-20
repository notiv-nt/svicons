/** @typedef {typeof __propDef.props}  CreativeCommonsByProps */
/** @typedef {typeof __propDef.events}  CreativeCommonsByEvents */
/** @typedef {typeof __propDef.slots}  CreativeCommonsBySlots */
export default class CreativeCommonsBy extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type CreativeCommonsByProps = typeof __propDef.props
export type CreativeCommonsByEvents = typeof __propDef.events
export type CreativeCommonsBySlots = typeof __propDef.slots
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
