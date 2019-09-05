import requset from '@/util/request'

// 登录
export function login (userName, password) {
  return requset({
    url: '/auth',
    method: 'post',
    data: {
      userName,
      password
    }
  })
}

// 中间
// 顶部数量统计
export function getQuantitativeStatistics (type, start, end) {
  return requset({
    url: 'datav/firstBigscreen/getQuantitativeStatistics',
    method: 'post',
    data: {
      type,
      start,
      end
    }
  })
}

// 中间数据概况
export function getDataProfile (type, start, end) {
  return requset({
    url: 'datav/firstBigscreen/getDataProfile',
    method: 'post',
    data: {
      type,
      start,
      end
    }
  })
}

// 左边

// 任务数公布数
export function getDetectionStatistics (type, start, end) {
  return requset({
    url: 'datav/firstBigscreen/getDetectionStatistics',
    method: 'post',
    data: {
      type,
      start,
      end
    }
  })
}

// 报告总数当前报告总数
export function getDetectionStatisticsTimingRequest (type, start, end) {
  return requset({
    url: 'datav/firstBigscreen/getDetectionStatisticsTimingRequest',
    method: 'post',
    data: {
      type,
      start,
      end
    }
  })
}

// 近5年合格率
export function getFiveYearEligibilityRate (type, start, end) {
  return requset({
    url: 'datav/firstBigscreen/getFiveYearEligibilityRate',
    method: 'post',
    data: {
      type,
      start,
      end
    }
  })
}

// 大宗食品不合格
export function getPopularFoodIsNotUpToStandard (type, start, end) {
  return requset({
    url: 'datav/firstBigscreen/getPopularFoodIsNotUpToStandard',
    method: 'post',
    data: {
      type,
      start,
      end
    }
  })
}

// 右边
// 千人批次数
export function getThousandsOfBatches (type, start, end) {
  return requset({
    url: 'datav/firstBigscreen/getThousandsOfBatches',
    method: 'post',
    data: {
      type,
      start,
      end
    }
  })
}

// 危害因子饼图
export function gradeHazardDistribution (type, start, end) {
  return requset({
    url: 'dangerChart/earlywarning/gradeHazardDistribution',
    method: 'post',
    data: {
      type,
      start,
      end
    }
  })
}

// 危害因子柱图
export function getHazardFactorStatistics (date, start) {
  return requset({
    url: 'datav/firstBigscreen/getHazardFactorStatistics',
    method: 'post',
    data: {
      date,
      start
    }
  })
}
