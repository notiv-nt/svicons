/** @typedef {typeof __propDef.props}  NpmProps */
/** @typedef {typeof __propDef.events}  NpmEvents */
/** @typedef {typeof __propDef.slots}  NpmSlots */
export default class Npm extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type NpmProps = typeof __propDef.props
export type NpmEvents = typeof __propDef.events
export type NpmSlots = typeof __propDef.slots
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
