/** @typedef {typeof __propDef.props}  UserCircleProps */
/** @typedef {typeof __propDef.events}  UserCircleEvents */
/** @typedef {typeof __propDef.slots}  UserCircleSlots */
export default class UserCircle extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type UserCircleProps = typeof __propDef.props
export type UserCircleEvents = typeof __propDef.events
export type UserCircleSlots = typeof __propDef.slots
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
