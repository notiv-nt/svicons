/** @typedef {typeof __propDef.props}  UserProps */
/** @typedef {typeof __propDef.events}  UserEvents */
/** @typedef {typeof __propDef.slots}  UserSlots */
export default class User extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type UserProps = typeof __propDef.props
export type UserEvents = typeof __propDef.events
export type UserSlots = typeof __propDef.slots
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
