/** @typedef {typeof __propDef.props}  FolderProps */
/** @typedef {typeof __propDef.events}  FolderEvents */
/** @typedef {typeof __propDef.slots}  FolderSlots */
export default class Folder extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type FolderProps = typeof __propDef.props
export type FolderEvents = typeof __propDef.events
export type FolderSlots = typeof __propDef.slots
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
