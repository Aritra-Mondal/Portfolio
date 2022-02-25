import { tryGetFile } from "@sanity/asset-utils";

const resume = {
  name: "pdfUploader",
  title: "Upload PDF and Get Link",
  type: "document",

  preview: {
    select: {
      title: "title",
    },
  },
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Name displayed on pdf list",
      type: "string",
      validation: (Rule) => [Rule.required()],
    },
    {
      name: "pdfFile",
      title: "Upload PDF File",
      description:
        "PDF File you want to upload, once you upload click generate URL",
      type: "file",
      validation: (Rule) => [Rule.required()],
    },
    {
      name: "generatedPDFURL",
      title: "Generate URL Link to this pdf",
      description:
        "Click GENERATE to get Link to pdf file, if you by mistake change it, click generate again. Then Copy link below and paste it anywhere you want",
      type: "slug",
      options: {
        // this source takes all data that is currently in this document and pass it as argument
        // then tryGetFile() - getting file from sanity with all atributes like url, original name etc
        source: ({ pdfFile }) => {
          if (!pdfFile) return "Missing PDF File";

          const { asset } = tryGetFile(pdfFile?.asset?._ref, {
            dataset: process.env.SANITY_STUDIO_DATASET,
            projectId: process.env.SANITY_STUDIO_PROJECT_ID,
          });
          return asset?.url;
        },
        slugify: (link) => link,
      },
      validation: (Rule) => [Rule.required()],
    },
  ],
};

export default resume;
