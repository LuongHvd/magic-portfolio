"use client";

import { Carousel, Column, Flex, Heading, SmartLink, Text } from "@once-ui-system/core";

interface ProjectCardProps {
  href: string;
  images: string[];
  title: string;
  description: string;
  link?: string;
  authors?: string; // 👈 added authors
}

const renderAuthors = (authors: string) =>
  authors.split(",").map((a, i, arr) => {
    const trimmed = a.trim();
    const isBold = trimmed.startsWith("b") && trimmed.endsWith("b");

    const content = isBold
      ? <strong>{trimmed.slice(0, 0)}</strong>
      : <span>{trimmed}</span>;

    return (
      <span key={i}>
        {content}
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
            <strong>Authors:</strong> {renderAuthors(authors)}
          </Text>
        )}

        {link && (
          <SmartLink
            suffixIcon="arrowUpRightFromSquare"
            style={{ margin: "0", width: "fit-content" }}
            href={link}
          >
            <Text variant="body-default-s">View</Text>
          </SmartLink>
        )}
      </Flex>
    </Column>
  );
};
