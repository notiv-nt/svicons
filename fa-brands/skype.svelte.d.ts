/** @typedef {typeof __propDef.props}  SkypeProps */
/** @typedef {typeof __propDef.events}  SkypeEvents */
/** @typedef {typeof __propDef.slots}  SkypeSlots */
export default class Skype extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type SkypeProps = typeof __propDef.props
export type SkypeEvents = typeof __propDef.events
export type SkypeSlots = typeof __propDef.slots
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
