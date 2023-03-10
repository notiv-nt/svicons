/** @typedef {typeof __propDef.props}  UsersProps */
/** @typedef {typeof __propDef.events}  UsersEvents */
/** @typedef {typeof __propDef.slots}  UsersSlots */
export default class Users extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type UsersProps = typeof __propDef.props
export type UsersEvents = typeof __propDef.events
export type UsersSlots = typeof __propDef.slots
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
