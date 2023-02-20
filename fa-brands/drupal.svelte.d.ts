/** @typedef {typeof __propDef.props}  DrupalProps */
/** @typedef {typeof __propDef.events}  DrupalEvents */
/** @typedef {typeof __propDef.slots}  DrupalSlots */
export default class Drupal extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type DrupalProps = typeof __propDef.props
export type DrupalEvents = typeof __propDef.events
export type DrupalSlots = typeof __propDef.slots
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
