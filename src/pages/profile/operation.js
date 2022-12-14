import * as React from 'react';
import './operation.css';

const EditBtnGroup = (props) => {
    // eslint-disable-next-line react/prop-types
    const { node } = props;
    return (
        <div className="op-btn-group">
            {/* <IconButton aria-label="" onClick={() => alert(JSON.stringify(this.node))}>
                <EyeOutlined />
            </IconButton> 
            // eslint-disable-next-line react/prop-types */}
            <button className="eye" onClick={() => node.setSelected(true)} tabIndex="0" type="button" aria-label="View">
                <span role="img" aria-label="eye" className="anticon anticon-eye">
                    <svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="eye"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            d="M81.8 537.8a60.3 60.3 0 010-51.5C176.6 286.5 319.8 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c-192.1 0-335.4-100.5-430.2-300.2z"
                            fill="#cccccc"
                        ></path>
                        <path
                            d="M512 258c-161.3 0-279.4 81.8-362.7 254C232.6 684.2 350.7 766 512 766c161.4 0 279.5-81.8 362.7-254C791.4 339.8 673.3 258 512 258zm-4 430c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"
                            fill="#cccccc"
                        ></path>
                        <path
                            d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258s279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766z"
                            fill="#8c8c8c"
                        ></path>
                        <path
                            d="M508 336c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"
                            fill="#8c8c8c"
                        ></path>
                    </svg>
                </span>
            </button>
            <button className="edit" tabIndex="0" type="button" aria-label="Edit">
                <span role="img" aria-label="edit" className="anticon anticon-edit">
                    <svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="edit"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path d="M761.1 288.3L687.8 215 325.1 577.6l-15.6 89 88.9-15.7z" fill="#e6f7ff"></path>
                        <path
                            d="M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89z"
                            fill="#1890ff"
                        ></path>
                    </svg>
                </span>
            </button>
            <button className="delete" tabIndex="0" type="button" aria-label="Delete">
                <span role="img" aria-label="delete" className="anticon anticon-delete">
                    <svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="delete"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path d="M292.7 840h438.6l24.2-512h-487z" fill="#fff2f0"></path>
                        <path
                            d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-504-72h304v72H360v-72zm371.3 656H292.7l-24.2-512h487l-24.2 512z"
                            fill="#ff4d4f"
                        ></path>
                    </svg>
                </span>
            </button>
        </div>
    );
};

export default EditBtnGroup;
