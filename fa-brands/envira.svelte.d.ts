/** @typedef {typeof __propDef.props}  EnviraProps */
/** @typedef {typeof __propDef.events}  EnviraEvents */
/** @typedef {typeof __propDef.slots}  EnviraSlots */
export default class Envira extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type EnviraProps = typeof __propDef.props
export type EnviraEvents = typeof __propDef.events
export type EnviraSlots = typeof __propDef.slots
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
