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

const highlightAuthors = (authors: string) =>
  authors.split(/(Ho Viet Duc Luong|Duc-Luong Ho-Viet)/g).map((part, index) => {
    const isHighlight = part === "Ho Viet Duc Luong" || part === "Duc-Luong Ho-Viet";

    return isHighlight ? <strong key={index}>{part}</strong> : <span key={index}>{part}</span>;
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
            <strong>Authors:</strong> {highlightAuthors(authors)}
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
