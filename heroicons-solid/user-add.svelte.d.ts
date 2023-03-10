/** @typedef {typeof __propDef.props}  UserAddProps */
/** @typedef {typeof __propDef.events}  UserAddEvents */
/** @typedef {typeof __propDef.slots}  UserAddSlots */
export default class UserAdd extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type UserAddProps = typeof __propDef.props
export type UserAddEvents = typeof __propDef.events
export type UserAddSlots = typeof __propDef.slots
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
