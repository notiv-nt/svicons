/** @typedef {typeof __propDef.props}  SitroxProps */
/** @typedef {typeof __propDef.events}  SitroxEvents */
/** @typedef {typeof __propDef.slots}  SitroxSlots */
export default class Sitrox extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type SitroxProps = typeof __propDef.props
export type SitroxEvents = typeof __propDef.events
export type SitroxSlots = typeof __propDef.slots
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
