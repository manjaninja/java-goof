// Commit: https://github.com/chili-epfl/collab-react-components/commit/b748073fee143b3e223f9b6c878a27bf03110e72#diff-fb8b44fff6be261f9a64ef3feac9c04aaaad5007805dbdaf73f718f522f244e7L1
// Model: .915
/**
 * Created by dario on 08.03.17.
 */
import sharedb from 'sharedb/lib/client';

// This line makes the WebSocket connection always use port the CollabServer port.
const host = window.location.host.replace('3000', '8080');
const webSocket = new WebSocket('ws://' + host);
const connection = new sharedb.Connection(webSocket);
export default connection;
