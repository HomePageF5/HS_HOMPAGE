/**
 * 상세페이지 공통 포맷
 * <PageFomatStandard title="상세페이지제목"> 내부 컨텐츠 작성 </PageFormatStandard>
 */
export const PageFormat = ({children,title}) => (
  <>
    <div className="title-wrapper">
      <div className="page text-center">{title}</div>
      <div className="content-wrapper">
      <div className="content">{children}</div>
      </div>
    </div>
  </>
);
