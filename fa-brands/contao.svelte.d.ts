/** @typedef {typeof __propDef.props}  ContaoProps */
/** @typedef {typeof __propDef.events}  ContaoEvents */
/** @typedef {typeof __propDef.slots}  ContaoSlots */
export default class Contao extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type ContaoProps = typeof __propDef.props
export type ContaoEvents = typeof __propDef.events
export type ContaoSlots = typeof __propDef.slots
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
