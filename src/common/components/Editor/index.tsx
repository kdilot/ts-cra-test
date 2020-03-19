import React, { useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.bubble.css';
import styled from 'styled-components';

const EditorBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 5rem;
    padding-bottom: 5rem;
    min-height: 350px;
`;

const TitleInput = styled.input`
    font-size: 3rem;
    padding-bottom: 0.5rem;
    border: none;
    border-bottom: 1px solid gray;
    margin-bottom: 2rem;
    width: 100%;
`;

const QuillWrapper = styled.div`
    .ql-editor {
        padding: 0;
        min-height: 320px;
        max-height: 320px;
        font-size: 1.125rem;
        line-height: 1.5;
    }
    .ql-ediotr.ql-blank::before {
        left: 0px;
    }
`;

const Editor: React.FC = () => {
    const quillElement = useRef<any>(null);
    const quillInstance = useRef<any>(null);

    useEffect(() => {
        quillInstance.current = new Quill(quillElement.current, {
            theme: 'bubble',
            placeholder: '내용을 작성해주세요...',
            modules: {
                ImageResize: {
                    modules: ['Resize', 'DisplaySize', 'Toolbar'],
                },
                toolbar: [
                    [{ header: 1 }, { header: 2 }],
                    ['bold', 'italic', 'underline', 'strike'],
                    [
                        { list: 'ordered' },
                        { list: 'bullet' },
                        { align: [false, 'center', 'right'] },
                    ],
                    ['blockquote', 'code-block', 'link', 'image'],
                ],
            },
        });

        const quill = quillInstance.current;
        quill.on('text-change', () => {
            console.log(quill.root.innerHTML);
        });
    }, []);

    return (
        <EditorBlock>
            <TitleInput placeholder={'제목을 입력하세요.'} />
            <QuillWrapper>
                <div ref={quillElement} />
            </QuillWrapper>
        </EditorBlock>
    );
};

export default Editor;
