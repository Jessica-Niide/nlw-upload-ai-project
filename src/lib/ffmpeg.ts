import { FFmpeg } from "@ffmpeg/ffmpeg"
import coreURL from "../ffmpeg/ffmpeg-core.js?url"
import wasmURL from "../ffmpeg/ffmpeg-core.wasm?url"
import workerURL from "../ffmpeg/ffmpeg-worker.js?url"


let ffmpeg: FFmpeg | null
export async function getFFmpeg() {
    console.log('getFFmpeg')
    if (ffmpeg) { 
        console.log('if (ffmpeg)')
        return ffmpeg }
    
    ffmpeg = new FFmpeg()

    if (!ffmpeg.loaded) {
        console.log('!ffmpeg.loaded')
        await ffmpeg.load({
        coreURL,
        wasmURL,
        workerURL
        })
    }

    return ffmpeg
}