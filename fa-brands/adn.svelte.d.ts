/** @typedef {typeof __propDef.props}  AdnProps */
/** @typedef {typeof __propDef.events}  AdnEvents */
/** @typedef {typeof __propDef.slots}  AdnSlots */
export default class Adn extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type AdnProps = typeof __propDef.props
export type AdnEvents = typeof __propDef.events
export type AdnSlots = typeof __propDef.slots
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
