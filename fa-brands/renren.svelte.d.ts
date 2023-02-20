/** @typedef {typeof __propDef.props}  RenrenProps */
/** @typedef {typeof __propDef.events}  RenrenEvents */
/** @typedef {typeof __propDef.slots}  RenrenSlots */
export default class Renren extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type RenrenProps = typeof __propDef.props
export type RenrenEvents = typeof __propDef.events
export type RenrenSlots = typeof __propDef.slots
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
