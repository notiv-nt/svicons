/** @typedef {typeof __propDef.props}  SymfonyProps */
/** @typedef {typeof __propDef.events}  SymfonyEvents */
/** @typedef {typeof __propDef.slots}  SymfonySlots */
export default class Symfony extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type SymfonyProps = typeof __propDef.props
export type SymfonyEvents = typeof __propDef.events
export type SymfonySlots = typeof __propDef.slots
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
