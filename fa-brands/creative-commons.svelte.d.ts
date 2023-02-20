/** @typedef {typeof __propDef.props}  CreativeCommonsProps */
/** @typedef {typeof __propDef.events}  CreativeCommonsEvents */
/** @typedef {typeof __propDef.slots}  CreativeCommonsSlots */
export default class CreativeCommons extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type CreativeCommonsProps = typeof __propDef.props
export type CreativeCommonsEvents = typeof __propDef.events
export type CreativeCommonsSlots = typeof __propDef.slots
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
