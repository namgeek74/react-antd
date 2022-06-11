import { Switch, Typography } from 'antd';
import React, { useState } from 'react';

const { Paragraph, Text } = Typography;

const Expandable = () => {
    const [ellipsis, setEllipsis] = useState(true);
    return (
        <>
            <Switch
                checked={ellipsis}
                onChange={() => {
                    setEllipsis(!ellipsis);
                }}
            />

            <Paragraph ellipsis={ellipsis}>
                Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team.
            </Paragraph>

            <Paragraph
                ellipsis={
                    ellipsis
                        ? {
                            rows: 2,
                            expandable: true,
                            symbol: 'more',
                        }
                        : false
                }
            >
                Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team.
            </Paragraph>

            <Text
                style={
                    ellipsis
                        ? {
                            width: 100,
                        }
                        : undefined
                }
                ellipsis={
                    ellipsis
                        ? {
                            tooltip: 'I am ellipsis now!',
                        }
                        : false
                }
            >
                Ant Design, a design language for background applications, is refined by Ant UED Team.
            </Text>
        </>
    );
};

export default Expandable;