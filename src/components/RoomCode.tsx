import CopyImg from '../assets/images/copy.svg';

import '../styles/room-code.scss';

type RoomCodeProps = {
    code: string;
}

export function RoomCode(props: RoomCodeProps) {


    function copyRoomCodeToClipboard() {
        navigator.clipboard.writeText(props.code);
    }

    return (
        <button onClick={copyRoomCodeToClipboard} className="room-code">
            <div>
                <img src={CopyImg} alt="Copiar código da aala" />
            </div>
            <span>Sala #{props.code}</span>
        </button>
    );
}