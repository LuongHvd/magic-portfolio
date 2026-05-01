"use client";

import { Carousel, Column, Flex, Heading, SmartLink, Text } from "@once-ui-system/core";

interface ProjectCardProps {
  href: string;
  images: string[];
  title: string;
  description: string;
  link?: string;
  bibtex?: string;
  authors?: string;
}

const render = (authors: string) =>
  authors.split(",").map((a, i, arr) => {
    const name = a.trim();
    const isHighlight = (name === "Ho Viet Duc Luong") || (name == "Duc-Luong Ho-Viet");

    return (
      <span key={i}>
        {isHighlight ? <strong>{name}</strong> : name}
        {i < arr.length - 1 && ", "}
      </span>
    );
  });

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  description,
  link,
  bibtex,
  authors,
}) => {
  return (
    <Column fillWidth gap="m">
      {images.length > 0 && (
        <Carousel
          sizes="(max-width: 960px) 100vw, 960px"
          items={images.map((image) => ({
            slide: image,
            alt: title,
          }))}
        />
      )}
      <Flex
        mobileDirection="column"
        fillWidth
        paddingX="s"
        paddingTop="12"
        paddingBottom="24"
        gap="l"
      >
        {title && (
          <Heading as="h2" wrap="balance" variant="heading-strong-xl">
            {title}
          </Heading>
        )}

        {description?.trim() && (
          <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
            {description}
          </Text>
        )}
        
        {authors?.trim() && (
          <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
            <strong>Authors:</strong> {render(authors)}
          </Text>
        )}

        {(link || bibtex) && (
          <Flex gap="16" wrap>
            {link && (
              <SmartLink
                suffixIcon="arrowUpRightFromSquare"
                style={{ margin: "0", width: "fit-content" }}
                href={link}
              >
                <Text variant="body-default-s">View</Text>
              </SmartLink>
            )}
            {bibtex && (
              <SmartLink
                suffixIcon="document"
                style={{ margin: "0", width: "fit-content" }}
                href={bibtex}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Text variant="body-default-s">BibTeX</Text>
              </SmartLink>
            )}
          </Flex>
        )}
      </Flex>
    </Column>
  );
};
