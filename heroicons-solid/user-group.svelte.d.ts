/** @typedef {typeof __propDef.props}  UserGroupProps */
/** @typedef {typeof __propDef.events}  UserGroupEvents */
/** @typedef {typeof __propDef.slots}  UserGroupSlots */
export default class UserGroup extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type UserGroupProps = typeof __propDef.props
export type UserGroupEvents = typeof __propDef.events
export type UserGroupSlots = typeof __propDef.slots
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
