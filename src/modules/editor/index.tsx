import React, { useState, useEffect } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { convertToRaw, EditorState, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import styled from 'styled-components';
import { EDITOR_OPTIONS } from './global';

const Editors: React.FC = () => {
    const blocksFromHtml = htmlToDraft(`<p>sdfwwe</p>
    <p>greergerg</p>
    <p>sdafs</p>`);
    const { contentBlocks, entityMap } = blocksFromHtml;
    const contentState = ContentState.createFromBlockArray(
        contentBlocks,
        entityMap,
    );
    const editorState = EditorState.createWithContent(contentState);
    const [text, setText] = useState<any>(editorState);

    function uploadImageCallBack(file) {
        console.log(file);
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://api.imgur.com/3/image');
            xhr.setRequestHeader('Authorization', 'Client-ID 8d26ccd12712fca');
            const data = new FormData();
            data.append('image', file);
            xhr.send(data);
            xhr.addEventListener('load', () => {
                const response = JSON.parse(xhr.responseText);
                console.log(response);
                resolve({
                    data: {
                        link:
                            'https://image-uploader-bucket-prod.s3.ap-northeast-2.amazonaws.com/jocad1596172796180617.jpeg',
                    },
                    success: true,
                    status: 200,
                });
            });
            xhr.addEventListener('error', () => {
                const error = JSON.parse(xhr.responseText);
                reject(error);
            });
        });
    }

    useEffect(() => {
        console.log(draftToHtml(convertToRaw(text.getCurrentContent())));
    }, [text]);

    return (
        <Container>
            <Editor
                editorState={text}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={setText}
                localization={{
                    locale: 'ko',
                }}
                toolbar={{
                    ...EDITOR_OPTIONS,
                    image: {
                        uploadCallback: uploadImageCallBack,
                        previewImage: true,
                        defaultSize: {
                            height: '100%',
                            width: '100%',
                        },
                    },
                }}
            />
        </Container>
    );
};

const Container = styled.div`
    * {
        box-sizing: content-box;
    }
    .DraftEditor-editorContainer {
        background-color: #fff;
        border-left: 0.1px solid transparent;
        position: relative;
        z-index: 1;
    }
    width: 800px;
    .demo-editor {
        height: 500px;
        border: 1px solid rgba(0, 0, 0, 0.1);
    }
`;

export default Editors;
