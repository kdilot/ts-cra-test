/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { convertToRaw, EditorState, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import styled from 'styled-components';
import { EDITOR_OPTIONS } from './global';
import { fileImageResize, ApiImages } from './functions';

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

    const uploadImageCallBack = (file: File) => {
        // console.log(file);
        return new Promise(async (resolve, reject) => {
            const resized = await fileImageResize(file);
            console.log(resized);

            const link = await ApiImages(resized);
            resolve({
                data: {
                    link,
                },
            });
        });
    };

    useEffect(() => {
        console.log(draftToHtml(convertToRaw(text.getCurrentContent())));
    }, [text]);

    return (
        <Container>
            <Editor
                editorState={text}
                wrapperClassName="draft-wrapper"
                editorClassName="draft-editor"
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
                            height: 'auto',
                            width: '100%',
                        },
                    },
                }}
            />
            {/* <Editor editorState={text} readOnly toolbarHidden /> */}
            <HtmlPreview
                dangerouslySetInnerHTML={{
                    __html: draftToHtml(convertToRaw(text.getCurrentContent())),
                }}
            />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: row;
    * {
        box-sizing: content-box;
    }
    .DraftEditor-editorContainer {
        background-color: #fff;
        border-left: 0.1px solid transparent;
        position: relative;
        z-index: 1;
    }
    width: 1000px;
    .draft-wrapper {
        width: 500px;
    }
    .draft-editor {
        box-sizing: border-box;
        width: 500px;
        height: 500px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        padding: 10px;
    }
    .public-DraftStyleDefault-block {
        margin: 0;
    }
`;

const HtmlPreview = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    height: 605px;
    overflow: auto;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 10px;
    p,
    ul,
    ol,
    div {
        width: 100%;
        margin: 0;
    }
    p {
        min-height: 22px;
    }
    div {
        display: flex;
    }
`;

export default Editors;
