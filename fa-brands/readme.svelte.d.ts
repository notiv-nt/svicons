/** @typedef {typeof __propDef.props}  ReadmeProps */
/** @typedef {typeof __propDef.events}  ReadmeEvents */
/** @typedef {typeof __propDef.slots}  ReadmeSlots */
export default class Readme extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type ReadmeProps = typeof __propDef.props
export type ReadmeEvents = typeof __propDef.events
export type ReadmeSlots = typeof __propDef.slots
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
