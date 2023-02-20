/** @typedef {typeof __propDef.props}  UniregistryProps */
/** @typedef {typeof __propDef.events}  UniregistryEvents */
/** @typedef {typeof __propDef.slots}  UniregistrySlots */
export default class Uniregistry extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type UniregistryProps = typeof __propDef.props
export type UniregistryEvents = typeof __propDef.events
export type UniregistrySlots = typeof __propDef.slots
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
